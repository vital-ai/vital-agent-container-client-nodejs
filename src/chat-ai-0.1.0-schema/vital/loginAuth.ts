import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#LoginAuth
 */
export class LoginAuth extends VITAL_Node {
  public loginAuthLockedDateTime?: string | Date;
  public loginAuthForcePasswordReset?: boolean;
  public lastLoginAttemptDateTime?: string | Date;
  public loginAuthLocked?: boolean;
  public password?: string;
  public username?: string;
  public loginAttemptCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#LoginAuth';
  }

  /**
   * Get property definitions for LoginAuth
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLoginAuthLockedDateTime',
        tsPropertyName: 'loginAuthLockedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isLoginAuthForcePasswordReset',
        tsPropertyName: 'loginAuthForcePasswordReset',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastLoginAttemptDateTime',
        tsPropertyName: 'lastLoginAttemptDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isLoginAuthLocked',
        tsPropertyName: 'loginAuthLocked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPassword',
        tsPropertyName: 'password',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUsername',
        tsPropertyName: 'username',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLoginAttemptCount',
        tsPropertyName: 'loginAttemptCount',
        type: 'number',
        required: false
      }
    ];
  }


}
