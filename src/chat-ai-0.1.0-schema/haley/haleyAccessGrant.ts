import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessGrant
 */
export class HaleyAccessGrant extends VITAL_Node {
  declare public loginURI?: string;
  public roleGrantTypeURI?: string;
  public roleGrantAspectURI?: string;
  public accountURI?: string;
  public roleGrantExtentURI?: string;
  public haleyAccessRightURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccessGrant';
  }

  /**
   * Get property definitions for HaleyAccessGrant
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRoleGrantTypeURI',
        tsPropertyName: 'roleGrantTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRoleGrantAspectURI',
        tsPropertyName: 'roleGrantAspectURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRoleGrantExtentURI',
        tsPropertyName: 'roleGrantExtentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessRightURI',
        tsPropertyName: 'haleyAccessRightURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
