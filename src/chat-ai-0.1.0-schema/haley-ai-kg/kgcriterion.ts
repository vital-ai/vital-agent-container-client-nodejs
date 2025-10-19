import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCriterion
 */
export class KGCriterion extends VITAL_Node {
  public kGQueryNearVectorCertainty?: number;
  public kGQueryKGRelationType?: string;
  public kGQuerySerializedVector?: string;
  public kGQueryChoiceValue?: string;
  public kGQueryBooleanValue?: boolean;
  public kGQueryNearVectorDistance?: number;
  public kGQueryMultiTaxonomyValue?: string;
  public kGQueryUnknownValue?: string;
  public kGQueryKGMetaType?: string;
  public kGQueryLongTextValue?: string;
  public kGQueryProvenanceURI?: string;
  public kGQueryTopKLimit?: number;
  public kGQuerySubtypeExpansion?: boolean;
  public kGQueryMoveToConcepts?: string;
  public kGConstraintComparatorURI?: string;
  public kGQueryMoveFromConcepts?: string;
  public kGQueryDoubleValue?: number;
  public kGQueryDateTimeValue?: string | Date;
  public kGQueryNearVectorForce?: number;
  public kGQueryTaxonomyValue?: string;
  public kGQueryMultiChoiceValue?: string;
  public kGQueryTextValue?: string;
  public kGQuerySubclassExpansion?: boolean;
  public kGQueryKGType?: string;
  public kGCriterionTypeURI?: string;
  public kGQueryIntegerValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGCriterion';
  }

  /**
   * Get property definitions for KGCriterion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorCertainty',
        tsPropertyName: 'kGQueryNearVectorCertainty',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGRelationType',
        tsPropertyName: 'kGQueryKGRelationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQuerySerializedVector',
        tsPropertyName: 'kGQuerySerializedVector',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryChoiceValue',
        tsPropertyName: 'kGQueryChoiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryBooleanValue',
        tsPropertyName: 'kGQueryBooleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorDistance',
        tsPropertyName: 'kGQueryNearVectorDistance',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryMultiTaxonomyValue',
        tsPropertyName: 'kGQueryMultiTaxonomyValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryUnknownValue',
        tsPropertyName: 'kGQueryUnknownValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGMetaType',
        tsPropertyName: 'kGQueryKGMetaType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryLongTextValue',
        tsPropertyName: 'kGQueryLongTextValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryProvenanceURI',
        tsPropertyName: 'kGQueryProvenanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryTopKLimit',
        tsPropertyName: 'kGQueryTopKLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGQuerySubtypeExpansion',
        tsPropertyName: 'kGQuerySubtypeExpansion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryMoveToConcepts',
        tsPropertyName: 'kGQueryMoveToConcepts',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGConstraintComparatorURI',
        tsPropertyName: 'kGConstraintComparatorURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryMoveFromConcepts',
        tsPropertyName: 'kGQueryMoveFromConcepts',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryDoubleValue',
        tsPropertyName: 'kGQueryDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryDateTimeValue',
        tsPropertyName: 'kGQueryDateTimeValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorForce',
        tsPropertyName: 'kGQueryNearVectorForce',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryTaxonomyValue',
        tsPropertyName: 'kGQueryTaxonomyValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryMultiChoiceValue',
        tsPropertyName: 'kGQueryMultiChoiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryTextValue',
        tsPropertyName: 'kGQueryTextValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGQuerySubclassExpansion',
        tsPropertyName: 'kGQuerySubclassExpansion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGType',
        tsPropertyName: 'kGQueryKGType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCriterionTypeURI',
        tsPropertyName: 'kGCriterionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryIntegerValue',
        tsPropertyName: 'kGQueryIntegerValue',
        type: 'number',
        required: false
      }
    ];
  }


}
