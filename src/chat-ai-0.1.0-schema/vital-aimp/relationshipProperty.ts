import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RelationshipProperty
 */
export class RelationshipProperty extends VITAL_Node {
  public relationshipPropertyType?: string;
  public multivalueProperty?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#RelationshipProperty';
  }

  /**
   * Get property definitions for RelationshipProperty
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRelationshipPropertyType',
        tsPropertyName: 'relationshipPropertyType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMultivalueProperty',
        tsPropertyName: 'multivalueProperty',
        type: 'boolean',
        required: false
      }
    ];
  }


}
