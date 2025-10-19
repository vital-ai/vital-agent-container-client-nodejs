import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-taxonomy#TaxonomyNode
 */
export class TaxonomyNode extends VITAL_Node {
  public haleyTaxonomyBaseVersion?: string;
  public selectable?: boolean;
  public rootCategory?: boolean;
  public leafCategory?: boolean;
  public haleyTaxonomyBase?: string;
  public externalID?: string;
  public description?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-taxonomy#TaxonomyNode';
  }

  /**
   * Get property definitions for TaxonomyNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion',
        tsPropertyName: 'haleyTaxonomyBaseVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#isSelectable',
        tsPropertyName: 'selectable',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#isRootCategory',
        tsPropertyName: 'rootCategory',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#isLeafCategory',
        tsPropertyName: 'leafCategory',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase',
        tsPropertyName: 'haleyTaxonomyBase',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#hasExternalID',
        tsPropertyName: 'externalID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      }
    ];
  }


}
