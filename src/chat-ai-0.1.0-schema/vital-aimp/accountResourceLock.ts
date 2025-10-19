import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountResourceLock
 */
export class AccountResourceLock extends VITAL_Node {
  public accountResourceLockUserLoginURI?: string;
  public accountResourceLockAccountURI?: string;
  public accountResourceLockStatusURI?: string;
  public accountResourceLockOwnerIdentifier?: string;
  public accountResourceLockTypeURI?: string;
  public accountResourceTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AccountResourceLock';
  }

  /**
   * Get property definitions for AccountResourceLock
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockUserLoginURI',
        tsPropertyName: 'accountResourceLockUserLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockAccountURI',
        tsPropertyName: 'accountResourceLockAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockStatusURI',
        tsPropertyName: 'accountResourceLockStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockOwnerIdentifier',
        tsPropertyName: 'accountResourceLockOwnerIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockTypeURI',
        tsPropertyName: 'accountResourceLockTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceTypeURI',
        tsPropertyName: 'accountResourceTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
