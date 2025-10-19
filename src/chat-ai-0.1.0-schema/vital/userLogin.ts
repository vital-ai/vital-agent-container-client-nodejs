import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#UserLogin
 */
export class UserLogin extends VITAL_Node {
  public locked?: boolean;
  public emailVerified?: boolean;
  public emailAddress?: string;
  public verificationCode?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#UserLogin';
  }

  /**
   * Get property definitions for UserLogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#isLocked',
        tsPropertyName: 'locked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isEmailVerified',
        tsPropertyName: 'emailVerified',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasEmailAddress',
        tsPropertyName: 'emailAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVerificationCode',
        tsPropertyName: 'verificationCode',
        type: 'string',
        required: false
      }
    ];
  }


}
