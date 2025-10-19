import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountGroup
 */
export class HaleyAccountGroup extends VITAL_Node {
  public accountGroupExternalIdentifier?: string;
  public accountGroupIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccountGroup';
  }

  /**
   * Get property definitions for HaleyAccountGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountGroupExternalIdentifier',
        tsPropertyName: 'accountGroupExternalIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountGroupIdentifier',
        tsPropertyName: 'accountGroupIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
