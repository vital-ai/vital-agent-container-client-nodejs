import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RelationshipSet
 */
export class RelationshipSet extends VITAL_Node {
  public globalRelationshipSet?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#RelationshipSet';
  }

  /**
   * Get property definitions for RelationshipSet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalRelationshipSet',
        tsPropertyName: 'globalRelationshipSet',
        type: 'boolean',
        required: false
      }
    ];
  }


}
